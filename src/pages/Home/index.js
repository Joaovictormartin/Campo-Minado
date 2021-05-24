import React, {Component} from 'react';
import {Alert} from 'react-native';

import params from '../../components/Params';
import MineField from '../../components/MineField';
import Header from '../../components/Header';
import LevelSelection from '../../pages/LevelSelection';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from '../../logica';

import {Container, Titulo, WrapperText, Board} from './styles';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeuuu!');
    }
    if (won) {
      Alert.alert('Parabéns!');
    }

    this.setState({board, lost, won});
  };

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns', 'Você venceu!');
    }

    this.setState({board, won});
  };

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <Container>
        <LevelSelection 
          isVisible={this.state.showLevelSelection} 
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({showLevelSelection: false})}
        />

        <Header 
          flagLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({showLevelSelection: true})}
        />

        <Board>
          <MineField
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
        </Board>
      </Container>
    );
  }
}
