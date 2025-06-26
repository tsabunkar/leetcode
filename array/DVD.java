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

        DVD[] dvdCollections = new DVD[3];

        // The actual code for creating an Array to hold DVD's.
        dvdCollections[0] = new DVD("Inception", 2010, "Christopher Nolan");
        dvdCollections[1] = new DVD("Taara Zamin Par", 2018, "Amir Khan");
        dvdCollections[2] = new DVD("Goal", 2001, "John");
        System.out.println(Arrays.toString(dvdCollections));

        // reading array using for in looop
        for (DVD dvdCollection : dvdCollections) {
            // Print the current value of square.
            System.out.println(dvdCollection);
        }

        int capacity = dvdCollections.length;
        System.out.println("The Array has a capacity of " + capacity);

    }
}
