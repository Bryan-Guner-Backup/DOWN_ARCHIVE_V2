import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';

import { headerTitle } from '../../../state/headerTitle';
import { currentGameState, matchupPlayers } from '../../../state/gameState';
import { getGameControl } from '../../../utils/data';
import RenderGameSquadup from './RenderGameSquadup';

const GameSquadupContainer = () => {
  const setHeaderTitle = useSetRecoilState(headerTitle);
  const [curGameState, setCurGameState] = useRecoilState(currentGameState);
  const players = useRecoilValue(matchupPlayers);
  const controls = getGameControl('GAME_SQUAD_UP');

  useEffect(() => {
    setCurGameState({
      ...curGameState,
      name: 'GAME_SQUAD_UP',
      matchedPlayers: [...players],
    });
  }, []);

  // sets the header title
  useEffect(() => {
    setHeaderTitle('Join the Squad');
  }, [setHeaderTitle]);

  return (
    <RenderGameSquadup players={players.slice(0, 2)} controls={controls} />
  );
};

export default GameSquadupContainer;
