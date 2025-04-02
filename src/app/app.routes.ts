import { Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

export const routes: Routes = [
    {
        //path: URL, 
        //component: component to display/navigate to
        path: "", 
        component: PostListComponent,
        title: "Post List"
    },

    {
        //post is the URL to the component we want, the ':id" is a parameter with id as the variable argument
        path: "post/:id",
        component: PostDetailComponent,
        title: "Post Details"
    }
];


