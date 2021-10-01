import { ref } from "vue";

interface Game {
  id: number;
  title: string;
}

const useGames = () => {

    const gamesList = ref<Game[]>([
        {
          id: 0,
          title: "Dead Cells",
        },
        {
          id: 1,
          title: "Disco Elysium",
        },
        {
          id: 2,
          title: "Pathologic",
        },
        {
          id: 3,
          title: "Oxigen not Included",
        },
        {
          id: 4,
          title: "Encased",
        },
        {
          id: 5,
          title: "Hades",
        },
      ]);

      const favGames = ref<{ [key: number]: Game }>({});

      const saveFav = ( game: Game ) => {
        if( game.id in favGames.value ) delete favGames.value[game.id];
        else favGames.value[game.id] = game;

        localStorage.setItem('favGames', JSON.stringify(favGames.value));
      };

    return {
        // Public properties
        gamesList,
        // Public methods
        saveFav,
    }
}

export default useGames;