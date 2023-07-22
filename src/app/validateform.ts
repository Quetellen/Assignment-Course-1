// import { FormControl, FormGroup} from "@angular/forms";

// export default class validateForm{
//     static validateAllFormFields(FormGroup:FormGroup){
//         Object.keys(FormGroup.controls).forEach(field=>{
//           const control = FormGroup.get(field);
//           if(control instanceof FormControl){
//             control.markAsDirty({onlySelf:true});
//           }else if(control instanceof this.FormGroup){
//             this.validateAllFormFields(control)
//           }
//         })
//       }
// }