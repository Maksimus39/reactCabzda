import React from 'react';

type RatingPropsType = {
    value: number
}

export function UncontrolledRating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0}/><button >1</button>
            <Star selected={props.value > 1}/><button >2</button>
            <Star selected={props.value > 2}/><button >3</button>
            <Star selected={props.value > 3}/><button >4</button>
            <Star selected={props.value > 4}/><button >5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    console.log('rendering')
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }
}