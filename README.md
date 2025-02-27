# datum-assessment-angular

# Angular Address Book
* to create a simple address book in angular without any backend
* no need to save the data, just in memory
* the app can perform CRUD on contacts with name, email and phone fields
* CRUD means Create, Read, Update, Delete

# Deployed to Github Pages
1. Build:
   ng build --output-path=dist --base-href=/datum-assessment-angular/

2. Deploy:
   Uses JamesIves/github-pages-deploy-action to handle deployment automatically
   branch: gh-pages 
   folder: dist

# The app can be accessed at https://riukari.github.io/datum-assessment-angular/

# For normal setup
1. Clone the repository

2. Install dependencies:
   npm install

3. Run the app locally:
   ng serve
