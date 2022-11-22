import java.util.Arrays;

public class Maps {
  public static int[] map(int[] arr) {
    return Arrays.stream(arr).map(s -> s * 2).toArray();
  }
}
