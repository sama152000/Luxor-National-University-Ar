import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FacultyService } from '../../Services/faculty.service';
import { Faculty, FacultySearchFilter } from '../../model/faculty.model';

@Component({
  selector: 'app-faculties',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {
  allFaculties: Faculty[] = [];
  filteredFaculties: Faculty[] = [];
  paginatedFaculties: Faculty[] = [];
  
  searchFilter: FacultySearchFilter = {
    searchText: '',
    alphabetFilter: 'الكل'
  };
  
  alphabetLetters: string[] = [];
  
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;
  
  isLoading = false;

  constructor(
    private facultyService: FacultyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadFaculties();
    this.loadAlphabetLetters();
  }

  loadFaculties(): void {
    this.isLoading = true;
    this.facultyService.getAllFaculties().subscribe(faculties => {
      this.allFaculties = faculties;
      this.applyFilters();
      this.isLoading = false;
    });
  }

  loadAlphabetLetters(): void {
    this.alphabetLetters = this.facultyService.getAlphabetLetters();
  }

  applyFilters(): void {
    this.facultyService.searchFaculties(this.searchFilter).subscribe(filtered => {
      this.filteredFaculties = filtered;
      this.currentPage = 1;
      this.updatePagination();
    });
  }

  onSearchTextChange(): void {
    this.applyFilters();
  }

  setAlphabetFilter(letter: string): void {
    this.searchFilter.alphabetFilter = letter;
    this.applyFilters();
  }

  isActiveAlphabetFilter(letter: string): boolean {
    return this.searchFilter.alphabetFilter === letter;
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredFaculties.length / this.itemsPerPage);
    this.updatePaginatedFaculties();
  }

  updatePaginatedFaculties(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedFaculties = this.filteredFaculties.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedFaculties();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, this.currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  viewFacultyDetails(facultyId: string | number): void {
    const id = typeof facultyId === 'string' ? parseInt(facultyId, 10) : facultyId;
    this.router.navigate(['/faculties', id]);
  }

  getMinValue(a: number, b: number): number {
    return Math.min(a, b);
  }
}