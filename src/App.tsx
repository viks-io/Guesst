import { useGame } from "./game/useGame";
import { CATEGORIES } from "./data/registry";
import { HomeScreen } from "./components/home/HomeScreen";
import { GameScreen } from "./components/game/GameScreen";
import { ResultScreen } from "./components/result/ResultScreen";

function App() {
  const { screen, activeItem, cluesRevealed, lastGuessWasWrong, guesses, result, actions } =
    useGame();

  return (
    <div className="min-h-screen bg-base font-sans">
      {screen === "home" && (
        <HomeScreen categories={CATEGORIES} onPlay={actions.startGame} />
      )}

      {screen === "game" && activeItem && (
        <GameScreen
          item={activeItem}
          cluesRevealed={cluesRevealed}
          lastGuessWasWrong={lastGuessWasWrong}
          guesses={guesses}
          onSubmitGuess={actions.submitGuess}
          onRevealNextClue={actions.revealNextClue}
          onRevealAnswer={actions.revealAnswer}
        />
      )}

      {screen === "result" && result && (
        <ResultScreen
          result={result}
          onPlayAgain={actions.playAgain}
          onGoHome={actions.goHome}
        />
      )}
    </div>
  );
}

export default App;
