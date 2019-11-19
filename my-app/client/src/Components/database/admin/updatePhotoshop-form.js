import React from 'react'

export class PhotoshopUpdate extends React.Component {
    
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('http://localhost:4200/api/photoshops/' + this.ID.value, {
            method: 'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
             "ID": this.ID.value,
             "Title": this.Title.value,
             "Description": this.Description.value,
             "ImageUrl": this.URL.value
            })
        }).then(res => {
            if (res.status === 201) alert("Successfully updated account.")
            else alert(res.status)
        });
    }
    render() {
        return(
            <div className="content">
                <header>
                    <h1>Update Photoshop Image</h1>
                </header>
                <div className='register-form'>
                    <form onSubmit={this.handleSubmit}>
                    <label>
                        ID:
                        <input ref={(ref) => {this.ID = ref}} type="number" id="input-id" name="id"/>
                    </label><br></br>
                    <label>
                        Title:
                        <input ref={(ref) => {this.Title = ref}} type="text" id="input-tilte" name="title"/>
                    </label><br></br>
                    <label>
                        Description:
                        <input ref={(ref) => {this.Description = ref}} type="text" id="input-description" name="description"/>
                    </label><br></br>
                    <label>
                        URL:
                        <input ref={(ref) => {this.URL = ref}} type="text" id="input-url" name="url"/>
                    </label><br></br>
                    <input type="submit" id="input-submit"/>
                    </form>
                </div>
            </div>
        )
    }
}