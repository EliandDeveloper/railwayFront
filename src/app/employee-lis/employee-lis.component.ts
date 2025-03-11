import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employee-lis',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule
  ],
  templateUrl: './employee-lis.component.html',
  styleUrls: ['./employee-lis.component.css']
})
export class EmployeeLisComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns: string[] = ['id', 'nombre', 'edad', 'puesto'];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getAll().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (error) => {
        console.error('Error fetching employees:', error);
      }
    });
  }
}