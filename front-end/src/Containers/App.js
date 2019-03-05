import React from 'react';
import SearchBox from '../Components/SearchBox'
import CardList from '../Components/CardList'
import Scroll from '../Components/Scroll'
import data from '../Components/data'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            students : data,
            searchFieldName : '',
            searchFieldTag: '',
            tag: '',  
            tagList: [],
        }
    }

    // componenDidMount() {
    //     fetch('https://www.hatchways.io/api/assessment/students', {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify()
    //     })
    //     .then(resp => resp.json())
    //     .then((data) => {this.setState({students: data})})
    // }

    onSearchNameChange = (event) => {
        this.setState({searchFieldName : event.target.value})
    }
    onSearchTagChange = (event) => {
        this.setState({searchFieldTag : event.target.value})
        console.log(this.state)
    }
    tagChange = (event) => {
        this.setState({tag: event.target.value})
    }
    tagSubmit = (event) => {
        if (event.key === 'Enter') {
            if (this.state.tagList.includes(this.state.tag)) {
                alert('Duplicated Tag!!!')
            } else {
                this.setState({tagList: [...this.state.tagList, this.state.tag]})
                // this.setState({
                //     students: this.students.map()
                // })
            }
        }
    }
    render() {
        const {students} = this.state.students
        const {searchFieldName, searchFieldTag, tagList} = this.state
        const filtered = students.filter(student => {
            const name = student.firstName + student.lastName;
            if (name.toLowerCase().includes(searchFieldName.toLowerCase()) 
            // || name.toLowerCase().includes(searchFieldTag.toLowerCase()) 
            ) {
                return true
            } else return false;
        })
        return (
            <div>
                <SearchBox className = 'tc' searchChange = {this.onSearchNameChange} holder = 'name'/>
                <SearchBox className = 'tc' searchChange = {this.onSearchTagChange} holder = 'tag'/>
                <Scroll>
                    <CardList 
                        students = {filtered}
                        tagChange = {this.tagChange}
                        tagSubmit = {this.tagSubmit}
                        tagList = {tagList}
                        />
                </Scroll>
            </div>
        );
    }
}

export default App