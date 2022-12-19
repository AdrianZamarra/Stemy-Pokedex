import React from 'react'
import { StyleSheet} from 'react-native';

export const PokemonInput = props => {
  const handleChange = input =>{
    props.setSearch(input.target.value);
  }
    
    return (
      <div className="inputForm">
        <input type="text"
         className="input"
         placeholder="Search: "
         style={styles}
         onChange={handleChange}/>
      </div>
    )};

  const styles = StyleSheet.create({
    input: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
  });