import React from 'react';
import './Card.css'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { 
            collapse: false,
        };
    }
    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }
    render() {
        const {pic, firstName, lastName, email, company, skill, grades,tagChange, tagList, tagSubmit} = this.props;
        return this.state.collapse ? 
        (
            <div className = 'bb'>
                <img alt='students' src={pic} />
                <div className = 'txt'>
                    <span><h1>{`${firstName} ${lastName}`}</h1><button color="primary" onClick={this.toggle} style={{ float: 'right', marginBottom: '1rem' }}>-</button></span>
                    <p>{`Email: ${email}`}</p>
                    <p>{`Company: ${company}`}</p>
                    <p>{`Skill: ${skill}`}</p>
                    <p>{`Average: ${grades.reduce((acc,val) => acc + val/grades.length, 0).toFixed(3) + '%'}`}</p>
                    
                </div>
                <div>
                    <div>
                        <input
                            className = 'w-20'
                            type='input'
                            placeholder='Add new tag then press enter...'
                            onChange= {tagChange}
                            onKeyPress = {tagSubmit}
                        />
                        <div className = 'grade'>
                            {grades.map((grade,i) => {
                                return <li key = {i} style = {{listStyleType: 'none'}}>{`Test ${i+1}: ${grade}%`}</li>
                            })}
                        </div>
                        <div>
                            {tagList.map((tag,i) => {
                                return <p className = 'tag'>{`${tag}`}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div className = 'bb'>
                <img alt='students' src={pic} />
                <div className = 'txt'>
                <span><h1>{`${firstName} ${lastName}`}</h1><button color="primary" onClick={this.toggle} style={{ float: 'right', marginBottom: '1rem' }}>+</button></span>
                    <p>{`Email: ${email}`}</p>
                    <p>{`Company: ${company}`}</p>
                    <p>{`Skill: ${skill}`}</p>
                    <p>{`Average: ${grades.reduce((acc,val) => acc + val/grades.length, 0).toFixed(3) + '%'}`}</p>
                </div>
            </div>
        )
    }
}
export default Card;