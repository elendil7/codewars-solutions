import java.util.stream.IntStream;
import java.util.Arrays;

public class Kata {
  public static int sum(int[] a) {
    if(a == null || a.length <= 1) return 0;
    int sum = Arrays.stream(a).sum();
    int arrayMin = Arrays.stream(a).min().getAsInt();
    int arrayMax = Arrays.stream(a).max().getAsInt();
    return sum - arrayMin - arrayMax;
  }
}
