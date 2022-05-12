/*
    Title: Sentence Smash

    Kata's Sensei: richardhsu

    Kata URL: https://www.codewars.com/kata/53dc23c68a0c93699800041d

    Description: Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

    Example
    ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
    */

// Java
// Solution
import java.util.Arrays;

public class SmashWords {

  public static String smash(String[] words) {
    String sentence = "";
    for(int i = 0; i < words.length; i++) {
      if(i+1==words.length) {
        sentence += words[i];
      } else {
        sentence += words[i] + " "; 
      }
    }
    return sentence;
  }
}