public class Factorial {
  public int factorial(int n) {
    if(n < 0 || n > 12) throw new IllegalArgumentException("n must be >= 0 and <= 12");
    if(n == 0) return 1;
    if(n < 2){
      return n;
    }
    return n * factorial(n-1);
  }
}
