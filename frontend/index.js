function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    const allLinks = document.createElement('nav')
    links.forEach((element) => {
      let theItem = document.createElement('a')
      theItem.textContent = element.textContent
      theItem.setAttribute('href', element.href)
      theItem.setAttribute('title', element.title)
      allLinks.appendChild(theItem)
    })
    return allLinks
  }
  
  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    const card = document.createElement('div')
    card.classList.add('learner-card')
    for (let i = 0; i < languages.length; i++) {
      if (learner.favLanguage === languages[i]['id']) {
        learner.favLanguage = languages[i]['name']
      }
    }
    let name = document.createElement('p')
    name.textContent = learner.fullName
    let iD = document.createElement('p')
    iD.textContent = `Learner ID: ${learner.id}`
    let birth = document.createElement('p')
    birth.textContent = `Date of Birth: ${learner.dateOfBirth}`
    let favLang = document.createElement('p')
    favLang.textContent = `Favorite Language: ${learner.favLanguage}`
    
    card.appendChild(name)
    card.appendChild(iD)
    card.appendChild(birth)
    card.appendChild(favLang)

    const section = document.querySelector('section')
    section.appendChild(card)
    
    const handleClick = () => {
      const targetedcard = document.querySelector('.active')
      if (targetedcard) {
        targetedcard.classList.remove('active')
      }
      card.classList.add('active')
    }
    card.addEventListener('click', handleClick)
  }
  
  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    learners.forEach((person) => {
      buildLearnerCard(person, languages);
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    const footer = document.createElement('footer')

    const company = document.createElement('div')
    company.classList.add('company-info')
    
    const compName = document.createElement('p')
    compName.classList.add('company-name')
    compName.textContent = footerData.companyName

    const compAddress = document.createElement('p')
    compAddress.classList.add('address')
    compAddress.textContent = footerData.address

    const compEmail = document.createElement('p')
    compEmail.classList.add('contact-email')
    compEmail.textContent = "Email: "
    const compEmailLink = document.createElement('a')
    compEmailLink.setAttribute('href', footerData.contactEmail)
    compEmailLink.textContent = 'info@example.com'
    compEmail.appendChild(compEmailLink)

    company.appendChild(compName)
    company.appendChild(compAddress)
    company.appendChild(compEmail)
    footer.appendChild(company)


    const social = document.createElement('div')
    social.classList.add('social-media')

    const twit = document.createElement('a')
    twit.textContent = 'Twitter'
    twit.setAttribute('href', footerData.socialMedia.twitter)

    const face = document.createElement('a')
    face.textContent = 'Facebook'
    face.setAttribute('href', footerData.socialMedia.facebook)

    const insta = document.createElement('a')
    insta.textContent = 'Instagram'
    insta.setAttribute('href', footerData.socialMedia.instagram)

    social.appendChild(twit)
    social.appendChild(face)
    social.appendChild(insta)
    footer.appendChild(social)

    const signature = document.createElement('div')
    signature.textContent = '© BLOOM INSTITUTE OF TECHNOLOGY 2024'
    footer.appendChild(signature)


    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

document.addEventListener('click', evt => {
  if (evt.target === document.querySelector('section')) {
    const learners = document.querySelectorAll('.learner-card')
    learners.forEach(card => card.classList.remove('active'))
  }
})
} 

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
