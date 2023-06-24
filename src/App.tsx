import React from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {Rating} from './components/Rating/Rating';

function App() {
    return (
        <div>
            <img src="https://avatars.mds.yandex.net/i?id=f9af22afacc4b1040b23ceb0c98f670477c79c76-9264723-images-thumbs&n=13" alt=""/>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'my friends'}/>
            <Accordion titleValue={'Menu'}/>
            <Accordion titleValue={'spisok'}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );

}

type PageTitlePropsType={
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;