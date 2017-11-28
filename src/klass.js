class SuperPiyo {
  piyo() {
    console.log('super');
  }
}
export class SubPiyo extends SuperPiyo{
  piyo() {
    console.log('sub');
  }
}
