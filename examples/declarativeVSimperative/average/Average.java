import java.util.Arrays;

public class Average {

  public static void main(String... args) {
    double[][] grades = {
      {13.5, 14, 15, 20, 14, 15, 18, 12, 13.5}, // student 1
      {20, 19, 19.5, 16, 15, 13, 16, 14, 16.5}, // student 2
      {10, 13, 14.5, 12, 15, 17, 19, 12, 15.5}, // student 3
    };
    double[] averages = new double[grades.length];

    for (int student = 0; student < grades.length; student++) {
      double sum = 0;
      for (int i = 0; i < grades[student].length; i++) {
        sum += grades[student][i];
      }
      averages[student] = sum / grades[student].length;
    }

    System.out.println(Arrays.toString(averages));
  }

}
