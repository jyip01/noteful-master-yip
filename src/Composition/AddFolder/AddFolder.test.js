import React from 'react'
import ReactDOM from 'react-dom'
import AddFolder from './AddFolder'
import {BrowserRouter} from 'react-router-dom'
import renderer from 'react-test-renderer'


it('renders without crashing',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<BrowserRouter><AddFolder/></BrowserRouter>,div)
    ReactDOM.unmountComponentAtNode(div)
})

it('should match with snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <AddFolder/>
        </BrowserRouter>
      )
      .toJSON();
     expect(tree).toMatchSnapshot();
     });
