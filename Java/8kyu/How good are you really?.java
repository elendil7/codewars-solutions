import java.util.stream.*;

public class Kata {
  public static boolean betterThanAverage(int[] classPoints, int yourPoints) {
    return (IntStream.of(classPoints).sum() / classPoints.length) < yourPoints;
  }
}
