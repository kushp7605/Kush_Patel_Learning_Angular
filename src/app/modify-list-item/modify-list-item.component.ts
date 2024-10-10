import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [RouterLink, PageNotFoundComponent],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent {

}
