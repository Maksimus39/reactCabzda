import React, {useState} from 'react';


type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

 function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true)

     const onToggle={
         width: '90px',
         height: '20px',
         border: '1px solid black',
         display: 'inline-block',
         padding: '2px',
         backgroundColor: collapsed ? 'white' : 'green'
     }
     const offToggle={
         width: '90px',
         height: '20px',
         border: '1px solid black',
         display: 'inline-block',
         marginLeft: '2px',
         padding: '2px',
         backgroundColor: collapsed ? 'red' : 'white'
     }

    return <div>
        <AccordionTitle title={props.titleValue}/>
        <button style={onToggle} onClick={()=>setCollapsed(false)}>OnToggle</button>
        <button  style={offToggle} onClick={()=>setCollapsed(true)}>OffToggle</button>
        {!collapsed  && <AccordionBody/>}
    </div>
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>---{props.title}---</h3>
    )
}

function AccordionBody(props: any) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion