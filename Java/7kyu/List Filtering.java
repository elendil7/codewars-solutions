import java.util.List;
import java.util.ArrayList;

public class Kata {
  public static List<Object> filterList(final List<Object> list) {
    List output = new ArrayList();
    for(Object cur : list){
      if(cur instanceof Integer) output.add(cur);
    }
    return output;
  }
}
