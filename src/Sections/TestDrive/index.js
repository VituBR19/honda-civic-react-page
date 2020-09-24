import React, { useState } from 'react';
import Iframe from '../../Components/Iframe';
import './styles.css';

function TestDrive() {
  const [touringSelect, setTouringSelect] = useState(true)
  const [exlSelect, setExlSelect] = useState(false)
  const [lxSelect, setLxSelect] = useState(false)
  const [selected, setSelected] = useState('eLIRbV7fncc')

  function handleTouringSelect() {
    setTouringSelect(true)
    setExlSelect(false)
    setLxSelect(false)

    setSelected('eLIRbV7fncc')
  }

  function handleExlSelect() {
    setTouringSelect(false)
    setExlSelect(true)
    setLxSelect(false)

    setSelected('PRXzB3pYViw')
  }

  function handleLxSelect() {
    setTouringSelect(false)
    setExlSelect(false)
    setLxSelect(true)

    setSelected('oitNf2RHeY0')
  }

  return (
    <section className="test-drive-container" id="test-drive">
      <h2 className="test-drive-title">Test Drive Virtual</h2>

      <div className="test-drive-actions">
        <span
          onClick={ handleTouringSelect } 
          className={ touringSelect ? 'actions-item selected' : 'actions-item' }
        >
          Touring
        </span>

        <span
          onClick={ handleExlSelect } 
          className={ exlSelect ? 'actions-item selected' : 'actions-item' }
        >
          EXL
        </span>

        <span
          onClick={ handleLxSelect } 
          className={ lxSelect ? 'actions-item selected' : 'actions-item' }
        >
          LX
        </span>
      </div>

      <Iframe selected={ selected }/>
      
    </section>
  );
}

export default TestDrive;