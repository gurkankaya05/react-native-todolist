import React,{useState} from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet,Text,TextInput,TouchableOpacity,View } from "react-native";
import Task from "./components/Task";


const App = () =>{
    const[task,setTask] = useState("");
    const[taskItems,setTaskItems] = useState([]);

//Add task
    const handleAddTask = () =>{
        Keyboard.dismiss();
        setTaskItems([...taskItems,task]);
        setTask(null);
    }

    const completeTask = (index) =>{
        let itemsCopy =[...taskItems];
        itemsCopy.splice(index,1);
        setTaskItems(itemsCopy);


    }
    return(
    <View style={styles.container}>
    <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Yapılacaklar Listesi 👀</Text>
        <View style={styles.items}>


            {
                taskItems.map((item,index) => {
                    return(
                        <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                        <Task  task={item}/>
                        </TouchableOpacity>
                    ) 
                })
            }
            {/* <Task task={'Task 1'}/>
            <Task task={'Task 2'}/> */}
           

        </View>
    </View>

    <KeyboardAvoidingView
    behavior={Platform.OS ==='ios' ? "padding" : "height"}
    style={styles.writeTaskWrapper}>

        <TextInput style={styles.input} placeholder="Task ekle" value={task} onChangeText={text => setTask(text)}/>



        <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.addWrapper}>
                <Text style={styles.addText}>+</Text> 
                     </View>
        </TouchableOpacity>

    </KeyboardAvoidingView>
    </View>
    )



}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#009f92'
    },
    tasksWrapper:{
        paddingTop:80,
        paddingHorizontal:20,
    },
    sectionTitle:{
        fontSize:24,
        fontWeight:'bold'
    },
    items:{
        marginTop:30
    },
    writeTaskWrapper:{
        position:'absolute',
        bottom:60,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',

    },
    input:{
        paddingVertical:'15',
        paddingHorizontal:'15',
        backgroundColor:'#FFF',
        borderRadius:60,
        borderColor:'#009f92',
        borderWidth:1,
        width:250,
        padding:10,
        marginLeft:17
        
    
},
    addWrapper:{
width:60,
height:60,
backgroundColor:'#FFF',
borderRadius:60,
justifyContent: 'center',
alignItems:'center',
borderColor:'#009f92',
borderWidth:1,




},
    addText:{
        fontSize:20,
        color:'#009f92'

},

})
export default App;
