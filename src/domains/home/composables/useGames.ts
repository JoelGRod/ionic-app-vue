import { ref } from "vue";

import { Game } from "../interfaces/home.interfaces";

const useGames = () => {

    const gamesList = ref<Game[]>([
        {
          id: 0,
          title: "Dead Cells",
          isFavourite: false,
        },
        {
          id: 1,
          title: "Disco Elysium",
          isFavourite: false,
        },
        {
          id: 2,
          title: "Pathologic",
          isFavourite: false,
        },
        {
          id: 3,
          title: "Oxigen not Included",
          isFavourite: false,
        },
        {
          id: 4,
          title: "Encased",
          isFavourite: false,
        },
        {
          id: 5,
          title: "Hades",
          isFavourite: false,
        },
      ]);

      const favGames = ref<{ [key: number]: Game }>({});

      const gamesListElement = ref();

      const saveFav = ( game: Game ) => {
        if( game.id in favGames.value ){ 
          delete favGames.value[game.id];
          game.isFavourite = false;
        } else {
          favGames.value[game.id] = game;
          game.isFavourite = true;
        }

        // We need to access the html elemnt with $el
        gamesListElement.value.$el.closeSlidingItems();

        localStorage.setItem('favGames', JSON.stringify(favGames.value));
      };

    return {
        // Public properties
        gamesList,
        gamesListElement,
        // Public methods
        saveFav,
    }
}

export default useGames;