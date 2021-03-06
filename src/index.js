function initMenu() {
  var links = document.querySelectorAll("#top-menu-bar a");
  for (var i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      $('.page-block').hide();
      var page = this.getAttribute('data-page');
      $('#' + page + "-page").fadeIn();
    }
  }
}

function initskillsPage() {
  var skills = [  
    {name: 'js', endorsments: 7, endorsedBy: 'Andreea'} ,
    {name: 'HTML', endorsments: 6, endorsedBy: 'Andrei'} ,
    {name: 'css', endorsments: 2, endorsedBy: ''} 
  ];
  var resultList = document.querySelector('#skills-page ul');

  var listItems = skills.map(function(skill) {
    var endorsedBy = ' - Endorsed by';
    if (skill.endorsedBy == "") {
      endorsedBy = "";
    }
    var name = skill.name.toUpperCase();
     return `<li>${name} 
      <span style="color: darkgray">- ${skill.endorsments} ${endorsedBy}</span>
      ${skill.endorsedBy}
      </li>`;
  })

  resultList.innerHTML = listItems.join('');
}

initMenu();
$("#skills-page").show();

$.ajax('data/skills.json');

initskillsPage();