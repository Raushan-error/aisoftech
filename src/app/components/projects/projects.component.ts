import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    { 
      title: 'Volleyball of India', 
      desc: 'Platform to manage volleyball data and operations globally.',
      tags: ['Angular', '.NET Core', 'SQL Server'],
      image: '📊'
    },
    { 
      title: 'SGFI (School Games Federation of India)', 
      desc: 'Enterprise system for managing school sports events, student data, and scheduling.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '🏅'
    }
  ];
}
