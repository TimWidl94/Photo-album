export class Photo {

  public church: string[] = [];
  public frontRegestryOffice: string[] = [];
  public groupPicture: string[] = [];
  public insideRestaurant: string[] = [];
  public outsideRestaurant: string[] = [];
  public registryOffice: string[] = [];
  public weddingShooting: string[] = [];




constructor(){
for (let i = 0; i < 61; i++) {
 this.church.push('pic' + i + '.jpg')
}
for (let i = 0; i < 61; i++) {
  this.frontRegestryOffice.push('pic' + i + '.jpg')
 }

}


}
