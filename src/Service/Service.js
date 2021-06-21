class Service {
  #courses = "[{\"id\":1,\"mentor\":\"Ivan Babichev\",\"titleCourse\":\"Front-End\",\"modules\":[{\"id\":1,\"titleModule\":\"HTML/CSS\",\"status\":\"in progress\"},{\"id\":2,\"titleModule\":\"GIT\",\"status\":\"in progress\"},{\"id\":3,\"titleModule\":\"JavaScript Basic\",\"status\":\"ready for release\"},{\"id\":4,\"titleModule\":\"JavaScript Advanced\",\"status\":\"in progress\"},{\"id\":5,\"titleModule\":\"React JS Basic\",\"status\":\"ready for release\"},{\"id\":6,\"titleModule\":\"React JS Advanced\",\"status\":\"in progress\"}]},{\"id\":2,\"mentor\":\"Oleg Andreev\",\"titleCourse\":\"Python\",\"modules\":[{\"id\":7,\"titleModule\":\"Basic\",\"status\":\"ready for release\"},{\"id\":8,\"titleModule\":\"GIT\",\"status\":\"ready for release\"},{\"id\":9,\"titleModule\":\"Databases\",\"status\":\"ready for release\"},{\"id\":10,\"titleModule\":\"OOP\",\"status\":\"ready for release\"},{\"id\":11,\"titleModule\":\"JavaScript\",\"status\":\"ready for release\"},{\"id\":12,\"titleModule\":\"Django basic\",\"status\":\"ready for release\"},{\"id\":13,\"titleModule\":\"Django advanced\",\"status\":\"ready for release\"},{\"id\":14,\"titleModule\":\"Linux\",\"status\":\"ready for release\"}]},{\"id\":3,\"mentor\":\"Nikita Vicktorov\",\"titleCourse\":\"Java\",\"modules\":[{\"id\":15,\"titleModule\":\"Introduction to programming\",\"status\":\"in progress\"},{\"id\":16,\"titleModule\":\"OOP\",\"status\":\"in progress\"},{\"id\":17,\"titleModule\":\"Collections, IO/NIO\",\"status\":\"ready for release\"},{\"id\":18,\"titleModule\":\"Work with databases\",\"status\":\"ready for release\"},{\"id\":19,\"titleModule\":\"Additional lectures\",\"status\":\"ready for release\"},{\"id\":20,\"titleModule\":\"Web\",\"status\":\"submitted\"},{\"id\":21,\"titleModule\":\"Spring\",\"status\":\"in progress\"},{\"id\":22,\"titleModule\":\"Bonus\",\"status\":\"submitted\"}]},{\"id\":4,\"mentor\":\"Oleg Vinnik\",\"titleCourse\":\".NET/C#\",\"modules\":[{\"id\":23,\"titleModule\":\"basic C#\",\"status\":\"in progress\"},{\"id\":24,\"titleModule\":\"GIT\",\"status\":\"in progress\"},{\"id\":25,\"titleModule\":\"OOP\",\"status\":\"submitted\"},{\"id\":26,\"titleModule\":\"C# Аdvanced\",\"status\":\"in progress\"},{\"id\":27,\"titleModule\":\"Work with database\",\"status\":\"in progress\"},{\"id\":28,\"titleModule\":\"ASP.NET\",\"status\":\"submitted\"}]},{\"id\":5,\"mentor\":\"Andrey Bogdanov\",\"titleCourse\":\"FullStack\",\"modules\":[{\"id\":29,\"titleModule\":\"HTML/CSS\",\"status\":\"in progress\"},{\"id\":30,\"titleModule\":\"GIT\",\"status\":\"in progress\"},{\"id\":31,\"titleModule\":\"JavaScript basic\",\"status\":\"ready for release\"},{\"id\":32,\"titleModule\":\"JavaScript advanced\",\"status\":\"ready for release\"},{\"id\":33,\"titleModule\":\"React JS\",\"status\":\"ready for release\"},{\"id\":34,\"titleModule\":\"Node.js Work with database\",\"status\":\"in progress\"},{\"id\":35,\"titleModule\":\"Linux\",\"status\":\"submitted\"}]}]"

  
  #filterModules = (courses, status) => courses.map(course => ({
    id: course.id,
    mentor: course.mentor,
    titleCourse: course.titleCourse,
    modules: [...course.modules.filter(module => module.status === status )]
  })).filter(course => course.modules.length)


  #findCardsByModule = (cards, searchData) => cards.filter(card => {
    const findModules = card.modules.filter(module =>
       module.titleModule.toLowerCase().includes(searchData.toLowerCase()));

    return !findModules.length ? false : true;
  });


  #findCardsByCourse = (cards, searchData) =>
     cards.filter(card => card.titleCourse.toLowerCase().includes(searchData.toLowerCase()));


  getCourse = async() => {
    const courses = await new Promise(res => setTimeout(() => res(JSON.parse(this.#courses)), 1000))

    const readyCards = this.#filterModules(courses, 'ready for release');
    const inProgressCards = this.#filterModules(courses, 'in progress');
    const submittedCards = this.#filterModules(courses, 'submitted');

    return [readyCards, inProgressCards, submittedCards];
  }


  getCountCourses = async() => {
    const courses = await new Promise(res => setTimeout(() => res(JSON.parse(this.#courses))))

    const readyCards = this.#filterModules(courses, 'ready for release');
    const inProgressCards = this.#filterModules(courses, 'in progress');
    const submittedCards = this.#filterModules(courses, 'submitted');

    return [readyCards.length, inProgressCards.length, submittedCards.length];
  }


  search = async(searchData) => {

    const courses = await new Promise(res => setTimeout(() => res(JSON.parse(this.#courses), 5000)))

    const readyCards = this.#filterModules(courses, 'ready for release');
    const inProgressCards = this.#filterModules(courses, 'in progress');
    const submittedCards = this.#filterModules(courses, 'submitted');

    const findByModulesReadyCards = this.#findCardsByModule(readyCards, searchData);
    const findByCardsReadyCards = this.#findCardsByCourse(readyCards, searchData);

    const findByModulesInProgress = this.#findCardsByModule(inProgressCards, searchData);
    const findByCardsInProgress = this.#findCardsByCourse(inProgressCards, searchData);

    const findByModulesSubmitted = this.#findCardsByModule(submittedCards, searchData);
    const findByCardsubmitted = this.#findCardsByCourse(submittedCards, searchData);


    return [
      [
        ...findByModulesReadyCards,
        ...findByCardsReadyCards
      ],
      [
        ...findByModulesInProgress,
        ...findByCardsInProgress
      ],
      [
        ...findByModulesSubmitted,
        ...findByCardsubmitted
      ]
    ]
  }

}

export default new Service()