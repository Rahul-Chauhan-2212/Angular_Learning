# Angular_Learning

Angular_Learning

#### Angular is a JavaScript based framework used to create reactive single page applications.

<ul>
<li>
<h4>Angular CLI</h4>
Used to create angular project and Install and manage dependencies regarding the project 
<h6>npm install -g @angular/cli@latest</h6>
Note:@latest is optional</br>
To Check Angular CLI version
<h6>ng --version</h6>
</li>

<li>
<h4>Create First Angular App</h4>
<h6>ng new my-first-app</h6>
</li>

<li>
<h4>Run Angular App</h4>
<h6>ng serve</h6>
</li>

<li>
<h4>Installing Bootstrap locally to project</h4>
<h6>npm install --save bootstrap@3</h6>
<h6>import the bootstrap.min.css in angular.json file</h6>
</li>

<li>
<h4>Create Angular Component and Using it<h4>
<h6>ng generate component componentname</h6>
                  OR
<h6>ng g c componentname</h6>
</li>

<li>
<h4>Data Binding</h4>
Bind TS data to HTML and vice-versa
<ol>
<li>String Interpolation==>{{data}}</li>
<li>Property Binding==>[property]="data"</li>
<li>Event Binding==>(event)="expression"</li>
<li>Two way Data Binding==>[(ngModel)]="data"</li>
Note: Work on HTML properties and events with custom properties and events(directives)
</ol>
</li>

<li>Directives-->Instructions in DOM
<h6>Structural Directives</h6>
<ol>
<li>ngIf</li>
<li>ngIf with else</li>
</ol>
<h6>Attribute Directives</h6>
<ol>
<li>ngStyle</li>
<li>ngClass</li>
</ol>
</li>

<li>
<h4>Binding To Custom Properties</h4>
<h6>Alias To Custom Properties</h6>
</li>
<li>
<h4>Binding To Custom Events</h4>
<h6>Alias To Custom Events</h6>
</li>

<li>
<h4>View Encapsulation</h4>
<h6>
<ol>
<li>Emulated(default)</li>
<li>None</li>
<li>Shadow</li>\
</ol>
</h6>
</li>

</ul>

## Project for Angular Basics

<h4>basics-app</h4>
<h6>
<ul>
<li>ng new basics-app --no-strict</li>
<li>npm install --save bootstrap@3</li>
<li>ng g c recepies</li>
<ul></h6>
