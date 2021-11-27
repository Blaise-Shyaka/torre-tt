const skillsMarkup = (person, arrayOfSkills) => {
  const arrayOfMarkupBits = [];
  arrayOfSkills.forEach((skill) => {
    arrayOfMarkupBits.push(`<span class="badge bg-info text-dark" 
                                  data-username="${person.username}"
                                  data-skillname="${skill.name}"
                                  data-bs-toggle="modal"
                                  data-bs-target="#skillDetailsModal">${skill.name}</span>`);
  });
  return arrayOfMarkupBits.join('');
};

const listOfPeopleMarkup = (listOfPeople) => {
  const arrayOfMarkupBits = [];

  listOfPeople.forEach((person) => {
    const topSkills = person.skills.slice(0, 14);
    const topSkillsMarkup = skillsMarkup(person, topSkills);

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
              ${topSkillsMarkup}
            </div>
        </div>
      </div>
      `,
    );
  });

  return arrayOfMarkupBits.join('');
};

const skillDetailsMarkup = (skillDetails) => {
  const {
    name, proficiency, recommendations, weight,
  } = skillDetails;

  return `
  <div class="modal-header">
    <h5 class="modal-title" id="skillDetailsModalLabel">${name}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
      <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Proficiency
        <span class="badge bg-primary rounded-pill">${proficiency}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Recommendations
        <span class="badge bg-primary rounded-pill">${recommendations}</span>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center">
        Weight
        <span class="badge bg-primary rounded-pill">${weight}</span>
      </li>
    </ul>
  </div>`;
};
export { listOfPeopleMarkup, skillDetailsMarkup };
