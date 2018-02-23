import java.util.Arrays;

public class Average {

  public static double average(double[] arr) {
    double sum = 0;

    for (int i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum / arr.length;
  }

  public static void main(String... args) {
    double[][][] grades = {
      {{13.5, 14, 15, 20}, {14, 15, 18}, {12, 13.5}},
      {{20, 19, 19.5, 16}, {15, 13, 16}, {14, 16.5}},
      {{10, 13, 14.5, 12}, {15, 17, 19}, {12, 15.5}},
    };
    double[] averages = new double[grades.length];

    for (int student = 0; student < grades.length; student++) {
      double[] courseExamsAverage = new double[grades[student].length];
      for (int course = 0; course < grades[student].length; course++) {
        courseExamsAverage[course] = average(grades[student][course]);
      }
      averages[student] = average(courseExamsAverage);
    }

    System.out.println(Arrays.toString(averages));
  }

}
