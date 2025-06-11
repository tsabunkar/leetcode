// DVDA simple definition for a DVD.

import java.util.Arrays;

public class DVD {
    public String name;
    public int releaseYear;
    public String director;

    public DVD(String name, int releaseYear, String director) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.director = director;
    }

    public String toString() {
        return this.name + ", directed by " + this.director + ", released in " + this.releaseYear;
    }

    public static void main(String[] args) {

        DVD[] dvdCollections = new DVD[1];

        // The actual code for creating an Array to hold DVD's.
        dvdCollections[0] = new DVD("Inception", 2010, "Christopher Nolan");
        System.out.println(Arrays.toString(dvdCollections));

    }
}
