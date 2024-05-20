var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ];
  
  // Find the first person in the array who is a teenager (age >= 10 and age <= 20)
  var firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
  console.log('First Teenager:', firstTeenager);
  
  // Find all persons in the array who are teenagers (age >= 10 and age <= 20)
  var allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);
  console.log('All Teenagers:', allTeenagers);
  
  // Check if every person in the array is a teenager (age >= 10 and age <= 20), should return true or false
  var everyoneIsTeenager = people.every(person => person.age >= 10 && person.age <= 20);
  console.log('Everyone is a Teenager:', everyoneIsTeenager);
  
  // Check if any person in the array is a teenager (age >= 10 and age <= 20), should return true or false
  var anyoneIsTeenager = people.some(person => person.age >= 10 && person.age <= 20);
  console.log('Anyone is a Teenager:', anyoneIsTeenager);
  var array = [1, 2, 3, 4];

  // Sum of array elements
  const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log('Sum:', sum); // Output: 10
  
  // Product of array elements
  const product = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  console.log('Product:', product); // Output: 24
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };
  companies.forEach(company => {
    console.log(company.name);
  });
  const companiesStartedAfter1987 = companies.filter(company => company.start > 1987);
  companiesStartedAfter1987.forEach(company => {
    console.log(company.name);
  });
  const retailCompanies = companies.filter(company => company.category === "Retail");

  retailCompanies.forEach(company => {
    company.start += 1; // Increment start year by 1
  
    // Create div element
    const companyDiv = document.createElement('div');
  
    // Create paragraph elements
    const namePara = document.createElement('p');
    const categoryPara = document.createElement('p');
    const startPara = document.createElement('p');
    const endPara = document.createElement('p');
  
    // Set text content for paragraphs
    namePara.textContent = `Name: ${company.name}`;
    categoryPara.textContent = `Category: ${company.category}`;
    startPara.textContent = `Start: ${company.start}`;
    endPara.textContent = `End: ${company.end}`;
  
    // Append paragraphs to div
    companyDiv.appendChild(namePara);
    companyDiv.appendChild(categoryPara);
    companyDiv.appendChild(startPara);
    companyDiv.appendChild(endPara);
  
    // Append div to body (or any other container element)
    document.body.appendChild(companyDiv);
  });
  function getRandomNumber() {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
      if (randomNumber > 5) {
        resolve(randomNumber);
      } else {
        reject("Error");
      }
    });
  }
  
  // Using the promise function
  getRandomNumber()
    .then(number => {
      console.log(`Random number: ${number}`);
    })
    .catch(error => {
      console.log(error);
    });
  