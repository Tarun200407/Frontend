let userdata = []

const saveData = ()=>{
    let alldata = JSON.parse(localStorage.getItem("userdata"))
    let len = alldata!=null ? alldata.length+1 : 1
    let name = document.getElementById("name").value
    // let age = document.frm.age.value
    let age = $("#age").val()
    let userId = $("#userId").val()
    let gender = $("input[type='radio']:checked").val()
    if(userId == ''){
        //insert
        let obj = {
            id:len,
            name:name,
            age:age,
            gender:gender
        }
        console.log(obj);
        userdata.push(obj)
   
    } else {
        //update
        let updatedData = alldata.map((i)=>{
            if(i.id == userId){
                i.name = name
                i.age = age
                i.gender = gender
            }
            return i
        })
        userdata = updatedData
    }
    // console.log(userdata);
    
    localStorage.setItem("userdata",JSON.stringify(userdata))
    document.frm.reset()
    $("#gender1").removeAttr("checked")
    $("#gender2").removeAttr("checked")
    disp()
}
const disp = ()=>{
    let alldata = JSON.parse(localStorage.getItem('userdata'))
    let txt = ''
    //all data disp table format 
    alldata.map((i)=>{
        txt += `
                <tr>
                    <td>${i.id}</td>
                    <td>${i.name}</td>
                    <td>${i.age}</td>
                    <td>${i.gender}</td>
                    <td>
                        <button onclick="editData(${i.id})">Edit</button> 
                        <button onclick="delData(${i.id})">Delete</button>
                    </td>
                </tr>`
    })
    $("#alldata").html(txt)

}
const delData = (id)=>{  // using for data dlt...//
    let alldata = JSON.parse(localStorage.getItem('userdata')) // for data get in local storage..// 
    let res = alldata.filter((i)=>{
            return i.id != id
    })
    let j=1
    let finaldata = res.map((i)=>{
            i.id = j++
            return i
    })
    userdata = finaldata
    localStorage.setItem("userdata",JSON.stringify(userdata))
    disp()
}
const editData = (id)=>{ // using for data edit...//
    $("#gender1").removeAttr("checked") // checked male gender..//
    $("#gender2").removeAttr("checked") // checked female gender..//
    let alldata = JSON.parse(localStorage.getItem('userdata'))   
    let res = alldata.find((i)=>{
            return i.id == id
    })
    $("#age").val(res.age) // age value checked...//
    $("#name").val(res.name) // Name value checked...//
    $("#userId").val(res.id) // Id value checked
    let gender = res.gender
    if(gender == "male"){
        $("#gender1").attr("checked","true") // checking for Male gender 
    } else {
        $("#gender2").attr("checked","true") // checking for female gender 
    }
    let a = $("input[type='radio']").attr("checked") // For selecting Male or Female
    disp()
}
disp()