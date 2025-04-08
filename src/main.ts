import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Replace with your standalone component

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
