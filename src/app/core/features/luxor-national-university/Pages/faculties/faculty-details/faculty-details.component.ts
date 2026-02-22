import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FacultyService } from '../../../Services/faculty.service';
import { ProgramService } from '../../../Services/program.service';
import { StaffService } from '../../../Services/staff.service';
import { Faculty } from '../../../model/faculty.model';
import { Program } from '../../../model/program.model';
import { Staff } from '../../../model/staff.model';

@Component({
  selector: 'app-faculty-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty-details.component.html',
  styleUrls: ['./faculty-details.component.css']
})
export class FacultyDetailsComponent implements OnInit {
  faculty: Faculty | null = null;
  programs: Program[] = [];
  staff: Staff[] = [];
  
  // Image slider
  currentImageIndex = 0;
  
  // About section
  activeAboutSection = 'overview';
  aboutSections = [
    { id: 'overview', title: 'نبذة عامة', icon: 'pi pi-home' },
    { id: 'vision', title: 'الرؤية', icon: 'pi pi-eye' },
    { id: 'mission', title: 'الرسالة', icon: 'pi pi-flag' },
    { id: 'goals', title: 'الأهداف', icon: 'pi pi-bullseye' },
    { id: 'history', title: 'تاريخ الكلية', icon: 'pi pi-clock' }
  ];
  
  // Programs pagination
  currentProgramsPage = 1;
  programsPerPage = 6;
  totalProgramsPages = 1;
  paginatedPrograms: Program[] = [];
  
  // Staff pagination
  currentStaffPage = 1;
  staffPerPage = 6;
  totalStaffPages = 1;
  paginatedStaff: Staff[] = [];
  
  // Modal states
  selectedProgram: Program | null = null;
  selectedStaff: Staff | null = null;
  showProgramModal = false;
  showStaffModal = false;
  
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private facultyService: FacultyService,
    private programService: ProgramService,
    private staffService: StaffService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.loadFacultyDetails(id);
      }
    });
  }

  loadFacultyDetails(id: number): void {
    this.isLoading = true;
    
    // Load faculty details
    this.facultyService.getFacultyById(id).subscribe(faculty => {
      this.faculty = faculty || null;
      
      if (this.faculty) {
        // Load programs
        this.programService.getProgramsByFacultyId(id).subscribe(programs => {
          this.programs = programs;
          this.updateProgramsPagination();
        });
        
        // Load staff
        this.staffService.getStaffByFacultyId(id).subscribe(staff => {
          this.staff = staff;
          this.updateStaffPagination();
        });
      }
      
      this.isLoading = false;
    });
  }

  // Image Slider Methods
  nextImage(): void {
    if (this.faculty && this.faculty.images && this.faculty.images.length > 1) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.faculty.images.length;
    }
  }

  previousImage(): void {
    if (this.faculty && this.faculty.images && this.faculty.images.length > 1) {
      this.currentImageIndex = this.currentImageIndex === 0 
        ? this.faculty.images.length - 1 
        : this.currentImageIndex - 1;
    }
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
  }

  getCurrentImage(): string {
    return this.faculty?.images?.[this.currentImageIndex] || this.faculty?.mainImage || '';
  }

  hasMultipleImages(): boolean {
    return (this.faculty?.images?.length || 0) > 1;
  }

  // About Section Methods
  setActiveAboutSection(sectionId: string): void {
    this.activeAboutSection = sectionId;
  }

  isActiveAboutSection(sectionId: string): boolean {
    return this.activeAboutSection === sectionId;
  }

  getAboutContent(): string {
    if (!this.faculty || !this.faculty.about) return '';
    
    switch (this.activeAboutSection) {
      case 'overview': return this.faculty.about.overview || '';
      case 'vision': return this.faculty.about.vision || '';
      case 'mission': return this.faculty.about.mission || '';
      case 'goals': return this.faculty.about.goals || '';
      case 'history': return this.faculty.about.history || '';
      default: return this.faculty.about.overview || '';
    }
  }

  // Programs Pagination Methods
  updateProgramsPagination(): void {
    this.totalProgramsPages = Math.ceil(this.programs.length / this.programsPerPage);
    this.updatePaginatedPrograms();
  }

  updatePaginatedPrograms(): void {
    const startIndex = (this.currentProgramsPage - 1) * this.programsPerPage;
    const endIndex = startIndex + this.programsPerPage;
    this.paginatedPrograms = this.programs.slice(startIndex, endIndex);
  }

  goToProgramsPage(page: number): void {
    if (page >= 1 && page <= this.totalProgramsPages) {
      this.currentProgramsPage = page;
      this.updatePaginatedPrograms();
    }
  }

  previousProgramsPage(): void {
    if (this.currentProgramsPage > 1) {
      this.goToProgramsPage(this.currentProgramsPage - 1);
    }
  }

  nextProgramsPage(): void {
    if (this.currentProgramsPage < this.totalProgramsPages) {
      this.goToProgramsPage(this.currentProgramsPage + 1);
    }
  }

  getProgramsPageNumbers(): number[] {
    const pages: number[] = [];
    const startPage = Math.max(1, this.currentProgramsPage - 2);
    const endPage = Math.min(this.totalProgramsPages, this.currentProgramsPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Staff Pagination Methods
  updateStaffPagination(): void {
    this.totalStaffPages = Math.ceil(this.staff.length / this.staffPerPage);
    this.updatePaginatedStaff();
  }

  updatePaginatedStaff(): void {
    const startIndex = (this.currentStaffPage - 1) * this.staffPerPage;
    const endIndex = startIndex + this.staffPerPage;
    this.paginatedStaff = this.staff.slice(startIndex, endIndex);
  }

  goToStaffPage(page: number): void {
    if (page >= 1 && page <= this.totalStaffPages) {
      this.currentStaffPage = page;
      this.updatePaginatedStaff();
    }
  }

  previousStaffPage(): void {
    if (this.currentStaffPage > 1) {
      this.goToStaffPage(this.currentStaffPage - 1);
    }
  }

  nextStaffPage(): void {
    if (this.currentStaffPage < this.totalStaffPages) {
      this.goToStaffPage(this.currentStaffPage + 1);
    }
  }

  getStaffPageNumbers(): number[] {
    const pages: number[] = [];
    const startPage = Math.max(1, this.currentStaffPage - 2);
    const endPage = Math.min(this.totalStaffPages, this.currentStaffPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Modal Methods
  openProgramModal(program: Program): void {
    this.selectedProgram = program;
    this.showProgramModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeProgramModal(): void {
    this.showProgramModal = false;
    this.selectedProgram = null;
    document.body.style.overflow = 'auto';
  }

  openStaffModal(staffMember: Staff): void {
    this.selectedStaff = staffMember;
    this.showStaffModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeStaffModal(): void {
    this.showStaffModal = false;
    this.selectedStaff = null;
    document.body.style.overflow = 'auto';
  }

  // Navigation Methods
  goBack(): void {
    this.router.navigate(['/faculties']);
  }
}