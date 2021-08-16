import { useContext, useState } from 'react';
// -- types ----------------------------------------------------------------------------------------

import { IArtboardProps } from '../../@types/artboard';
import { ArtBoardContext } from '../../context/ArtBoardContext';

import Monitor from '../../components/Monitor';

// -- stylesheet -----------------------------------------------------------------------------------

import './Artboard.scss';
import ArtboardHandler from './ArtboardHandler';

// -- view component definition --------------------------------------------------------------------

// import { ArtboardSketch, boardSketch } from './ArtboardSketch';
import { ArtboardTurtleSketch, turtleSketch } from './ArtboardTurtle';

/**
 * View of the Artboard Framework component.
 *
 * @returns root JSX element
 */
export default function (props: IArtboardProps): JSX.Element {
  // list of all artboards generated by the user.
  const { artBoardList } = useContext(ArtBoardContext);
  const [id, setId] = useState<number>(0);

  const [doArc, setDoArc] = useState(false);

  const [doClean, setDoClean] = useState(false);

  const moveTurtleInArc = () => setDoArc(true);

  const performClean = () => setDoClean(true);

  // register the performClean method to the Monitor to connect this with the menu dock
  Monitor.registerArtboardClean(performClean);

  return (
    <>
      <div id="artboard-wrapper">
        <button onClick={moveTurtleInArc}>Arc</button>
        <h4>Artboard {`(${props.dimensions[0]} × ${props.dimensions[1]})`}</h4>
        {artBoardList.map((board) => (
          <ArtboardHandler
            doArc={doArc}
            doClean={doClean}
            setDoArc={setDoArc}
            setDoClean={setDoClean}
            key={board._turtle._id}
            index={board._turtle._id}
            turtle={board._turtle}
            updateDimensions={props.updateDimensions}
          />
        ))}
      </div>
      <ArtboardTurtleSketch artBoardList={artBoardList} sketch={turtleSketch} index={id + 1} />
    </>
  );
}
