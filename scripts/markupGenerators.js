const skillsMarkup = (arrayOfSkills) => {
  const arrayOfMarkupBits = [];
  arrayOfSkills.forEach((skill) => {
    arrayOfMarkupBits.push(`<span class="badge bg-info text-dark">${skill.name}</span>`);
  });
  return arrayOfMarkupBits.join('');
};

const listOfPeopleMarkup = (listOfPeople) => {
  const arrayOfMarkupBits = [];

  listOfPeople.forEach((person) => {
    const topSkills = person.skills.slice(0, 14);
    const skills = skillsMarkup(topSkills);

    const {
      picture, name, professionalHeadline, locationName,
    } = person;

    arrayOfMarkupBits.push(
      `<div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${picture}" class="img-fluid rounded-start" alt="Profile picture">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">${professionalHeadline}</p>
              <p class="card-text"><small class="text-muted">${locationName}</small></p>
            </div>
          </div>
          <div class="card-body">
              ${skills}
            </div>
        </div>
      </div>
      `,
    );
  });

  return arrayOfMarkupBits.join('');
};

export default listOfPeopleMarkup;
