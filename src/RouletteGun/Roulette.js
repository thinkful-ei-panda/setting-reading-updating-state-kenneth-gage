import React, { Component } from 'react' ;


class Roulette extends React.Component {

    static defaultProps = {
        bulletInChamber : 8
    };


       state = {
        chamber : null,
        spinningTheChamber : false,
    } 
  
    

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }



    handleClick(){
        

        this.setState({
            spinningTheChamber : true
        })
        
        this.timeout = setTimeout(()=>{
            this.setState({ chamber :  Math.ceil(Math.random() * 8)  })
            this.setState ({spinningTheChamber : false})

        },2000)
      }

    renderDisplay() {
        console.log(this.props)
        const {chamber, spinningTheChamber} = this.state
        const { bulletInChamber } = this.props
            return spinningTheChamber ? 'spinning the camber '  
            : bulletInChamber === chamber ? 'Bang ' 
            :'your safe' ; 
        
    }

          
         
    


    render(){
        return(
            <div>
                <p>{this.renderDisplay()}</p>
                <button onClick={() => this.handleClick()}>Pull the trigger!</button>
            </div>
        )
    }


}


export default Roulette