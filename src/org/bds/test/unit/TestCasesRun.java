package org.bds.test.unit;

import junit.framework.Assert;
import org.bds.test.TestCasesBase;
import org.bds.util.Timer;
import org.junit.Test;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

/**
 * Test cases that require BDS code execution and check results
 * <p>
 * Note: These test cases requires that the BDS code is correctly parsed, compiled and executes.
 *
 * @author pcingola
 */
public class TestCasesRun extends TestCasesBase {

    @Test
    public void test00_plus_int() {
        runAndCheck("test/run_00_plus_int.bds", "i", 42L);
    }

    @Test
    public void test00_plus_real() {
        runAndCheck("test/run_00_plus_real.bds", "i", 42.0);
    }

    @Test
    public void test00_plus_string() {
        runAndCheck("test/run_00_plus_string.bds", "i", "42 life universe, and everything");
    }

    @Test
    public void test00_minus_int() {
        runAndCheck("test/run_00_minus_int.bds", "i", 42L);
    }

    @Test
    public void test00_minus_real() {
        runAndCheck("test/run_00_minus_real.bds", "i", 42.0);
    }

    @Test
    public void test00_div_int() {
        runAndCheck("test/run_00_div_int.bds", "i", 3L);
    }

    @Test
    public void test00_div_real() {
        runAndCheck("test/run_00_div_real.bds", "i", 3.3333333333333335);
    }


    @Test
    public void test00_plus() {
        runAndCheck("test/run_00_plus_int.bds", "i", 42L);
    }

    @Test
    public void test01() {
        runAndCheck("test/run_01.bds", "i", 2L);
    }

    @Test
    public void test02() {
        runAndCheck("test/run_02.bds", "i", 9L);
    }

    @Test
    public void test03() {
        runAndCheck("test/run_03.bds", "i", 10L);
    }

    @Test
    public void test03_2() {
        runAndCheck("test/run_03.bds", "j", 9L);
    }

    @Test
    public void test04() {
        runAndCheck("test/run_04.bds", "i", 10L);
    }

    @Test
    public void test04_2() {
        runAndCheck("test/run_04.bds", "j", 11L);
    }

    @Test
    public void test05() {
        runAndCheck("test/run_05.bds", "i", 10L);
    }

    @Test
    public void test06() {
        runAndCheck("test/run_06.bds", "i", 1L);
    }

    @Test
    public void test06_2() {
        runAndCheck("test/run_06.bds", "r1", 1.0);
    }

    @Test
    public void test06_3() {
        runAndCheck("test/run_06.bds", "r2", 5.0);
    }

    @Test
    public void test07() {
        runAndCheck("test/run_07.bds", "j", 4L);
    }

    @Test
    public void test08() {
        runAndCheck("test/run_08.bds", "j", 5L);
    }

    @Test
    public void test09() {
        runAndCheck("test/run_09.bds", "i", 5L);
    }

    @Test
    public void test10() {
        runAndCheck("test/run_10.bds", "i", 4L);
    }

    @Test
    public void test11() {
        runAndCheck("test/run_11.bds", "i", 6L);
    }

    @Test
    public void test12() {
        runAndCheck("test/run_12.bds", "i", 1L);
    }

    @Test
    public void test13() {
        runAndCheck("test/run_13.bds", "h", 8L);
    }

    @Test
    public void test14() {
        runAndCheck("test/run_14.bds", "s", "this is string interpolation: int i = 42 and str = \"hi\" and both hi42");
    }

    @Test
    public void test15_2() {
        runAndCheck("test/run_15.bds", "li2", "[apple, orange, bannana]");
    }

    @Test
    public void test15_3() {
        runAndCheck("test/run_15.bds", "li3", "[apple, orange, 1]");
    }

    @Test
    public void test15_4() {
        runAndCheck("test/run_15.bds", "li4", "[apple, orange, 3.14]");
    }

    @Test
    public void test15_5() {
        runAndCheck("test/run_15.bds", "li5", "[apple, orange, false]");
    }

    @Test
    public void test15_6() {
        runAndCheck("test/run_15.bds", "li6", "[apple, orange, i=10hihihi]");
    }

    @Test
    public void test16() {
        runAndCheck("test/run_16.bds", "ss", "onetwothree");
    }

    @Test
    public void test17() {
        Map<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("s", " HEllo ");
        expectedValues.put("s1", "HEllo");
        expectedValues.put("s2", " hello ");
        expectedValues.put("s3", " HELLO ");
        expectedValues.put("s4", "Ello ");
        expectedValues.put("s5", "Ell");
        expectedValues.put("s6", " HEllo ");
        expectedValues.put("s7", "");
        expectedValues.put("s8", " HEzo ");
        expectedValues.put("i1", 7);
        expectedValues.put("i2", 3);
        expectedValues.put("i3", 4);
        expectedValues.put("i4", -1);
        expectedValues.put("i5", -1);
        expectedValues.put("ss", "hello");
        expectedValues.put("b1", true);
        expectedValues.put("b2", false);
        expectedValues.put("b3", true);
        expectedValues.put("b4", false);
        runAndCheck("test/run_17.bds", expectedValues);
    }

    @Test
    public void test18() {
        runAndCheck("test/run_18.bds", "s1", "three");
    }

    @Test
    public void test18_2() {
        runAndCheck("test/run_18.bds", "s3", "three");
    }

    @Test
    public void test19() {
        runAndCheck("test/run_19.bds", "h", "one");
    }

    @Test
    public void test20() {
        runAndCheck("test/run_20.bds", "h", "dos");
    }

    @Test
    public void test21() {
        runAndCheck("test/run_21.bds", "l1", "line 1\nline 2\nline 3\n");
    }

    @Test
    public void test21_2() {
        runAndCheck("test/run_21.bds", "l2", "line 2");
    }

    @Test
    public void test22() {
        runAndCheck("test/run_22.bds", "l2", "file_3.txt");
    }

    @Test
    public void test23() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("ltsize", 2);
        expectedValues.put("lh", "one");
        expectedValues.put("lt0", "two");
        expectedValues.put("lt1", "three");
        runAndCheck("test/run_23.bds", expectedValues);
    }

    @Test
    public void test24() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("p", 3);
        expectedValues.put("s", 3);
        expectedValues.put("l0", 1);
        expectedValues.put("l1", 2);
        expectedValues.put("l2", 4);
        runAndCheck("test/run_24.bds", expectedValues);
    }

    @Test
    public void test25() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("l0", 1);
        expectedValues.put("l1", 2);
        expectedValues.put("l2", 3);
        runAndCheck("test/run_25.bds", expectedValues);
    }

    @Test
    public void test26() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("l0", 1);
        expectedValues.put("l1", 2);
        expectedValues.put("l2", 3);
        expectedValues.put("l3", 4);
        expectedValues.put("l4", 5);
        expectedValues.put("s", 5);
        runAndCheck("test/run_26.bds", expectedValues);
    }

    @Test
    public void test28() {
        runAndCheck("test/run_28.bds", "events", "[done]");
    }

    public void test29() {
        runAndCheck("test/run_29.bds", "events", "[runnning, wait, done]");
    }

    @Test
    public void test31() {
        Timer timer = new Timer();
        timer.start();
        runAndCheck(1, "test/run_31.bds", "events", "[runnning, kill, done]");
        Assert.assertTrue(timer.elapsed() < 1 * 1000); // We should finish in much less than 1 secs (the program waits 60secs)
    }

    @Test
    public void test32() {
        runAndCheck("test/run_32.bds", "out", "Hi\n");
    }

    @Test
    public void test33() {
        runAndCheck("test/run_33.bds", "err", "Hi\n");
    }

    @Test
    public void test34() {
        runAndCheck("test/run_34.bds", "exitStat", "0");
    }

    @Test
    public void test35() {
        runAndCheck("test/run_35.bds", "exitStat", "1");
    }

    @Test
    public void test37() {
        runAndCheck("test/run_37.bds", "s", "after");
    }

    @Test
    public void test38() {
        runAndCheck("test/run_38.bds", "su", "$s world \\n");
    }

    @Test
    public void test39() {
        String home = System.getenv("HOME");
        runAndCheck("test/run_39.bds", "home", home);
    }

    @Test
    public void test40() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("file", "zzz.txt");
        expectedValues.put("opt", "true");
        expectedValues.put("num", "42");
        expectedValues.put("rnum", "3.1415");
        expectedValues.put("args", "[-file, zzz.txt, -num, 42, -rnum, 3.1415, -opt, -notProcessed, more, arguments]");

        // Arguments to add after program name
        ArrayList<String> argsAfter = new ArrayList<>();

        argsAfter.add("-file");
        argsAfter.add("zzz.txt");

        argsAfter.add("-num");
        argsAfter.add("42");

        argsAfter.add("-rnum");
        argsAfter.add("3.1415");

        argsAfter.add("-opt");

        argsAfter.add("-notProcessed");
        argsAfter.add("more");
        argsAfter.add("arguments");

        runAndCheck("test/run_40.bds", expectedValues, argsAfter);
    }

    @Test
    public void test41() {
        runAndCheck("test/run_01.bds", "programName", "run_01.bds");
    }

    @Test
    public void test42() {
        runAndCheck("test/run_42.bds", "i", 6L);
    }

    @Test
    public void test43() {
        runAndCheck(1, "test/run_43.bds", "finished", 0L);
    }

    public void test44() {
        runAndCheckExit("test/run_44.bds", 0);
    }

    public void test45() {
        runAndCheckExit("test/run_45.bds", 1);
    }

    public void test46() {
        runAndCheck("test/run_46.bds", "i", 2L);
    }

    @Test
    public void test47() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("in", "[in1.txt, in2.txt, in3.txt]");
        expectedValues.put("out", "zzz.txt");
        expectedValues.put("ok", "true");

        ArrayList<String> args = new ArrayList<>();

        args.add("-ok");

        args.add("-in");
        args.add("in1.txt");
        args.add("in2.txt");
        args.add("in3.txt");

        args.add("-out");
        args.add("zzz.txt");

        runAndCheck("test/run_47.bds", expectedValues, args);
    }

    @Test
    public void test48() {
        runAndCheck(1, "test/run_48.bds", "step", 2L);
    }

    @Test
    public void test50() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("i", "32");
        expectedValues.put("j", "302");
        expectedValues.put("jx", "44");
        expectedValues.put("jy", "91");

        runAndCheck("test/run_50.bds", expectedValues);
    }

    @Test
    public void test51() {
        runAndCheck("test/run_51.bds", "hash", "{ hi => bye }");
    }

    @Test
    public void test52() {
        runAndCheck("test/run_52.bds", "hash", "{ one => 1 }");
    }

    @Test
    public void test53() {
        runAndCheck("test/run_53.bds", "vals", "[bye, chau]");
    }

    @Test
    public void test54() {
        runAndCheck("test/run_54.bds", "vals", "[hi, hola]");
    }

    @Test
    public void test55() {
        runAndCheck("test/run_55.bds", "hk1", "true");
        runAndCheck("test/run_55.bds", "hk2", "false");
        runAndCheck("test/run_55.bds", "hv1", "true");
        runAndCheck("test/run_55.bds", "hv2", "false");
        runAndCheck("test/run_55.bds", "hk3", "false");
    }

    @Test
    public void test56() {
        runAndCheck("test/run_56.bds", "out", "Adios;Au revoir;Bye;");
        runAndCheck("test/run_56.bds", "str", "map = { Bonjour => Au revoir, Hello => Bye, Hola => Adios }");
    }

    @Test
    public void test57() {
        runAndCheck("test/run_57.bds", "z", 0L);
    }

    @Test
    public void test58() {
        runAndCheck("test/run_58.bds", "z", 0L);
    }

    @Test
    public void test59() {
        runAndCheck("test/run_59.bds", "z", -1L);
    }

    @Test
    public void test60() {
        String fileName = "test/run_60.bds";
        String[] args = {fileName, "-b"};
        runAndCheck(fileName, args, "b", true);
    }

    @Test
    public void test61() {
        String fileName = "test/run_60.bds";
        String[] args = {fileName, "-b", "true"};
        runAndCheck(fileName, args, "b", true);
    }

    @Test
    public void test62() {
        String fileName = "test/run_60.bds";
        String[] args = {fileName, "-b", "false"};
        runAndCheck(fileName, args, "b", false);
    }

    @Test
    public void test63() {
        runAndCheck("test/run_63.bds", "l", "[]");
    }

    @Test
    public void test64() {
        runAndCheck("test/run_64.bds", "m", "{}");
    }

    @Test
    public void test65() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("bsfalse", false);
        expectedValues.put("bstrue", true);
        expectedValues.put("bifalse", false);
        expectedValues.put("bitrue", true);
        expectedValues.put("brfalse", false);
        expectedValues.put("brtrue", true);
        expectedValues.put("blfalse", false);
        expectedValues.put("bltrue", true);
        expectedValues.put("bmfalse", false);
        expectedValues.put("bmtrue", true);
        runAndCheck("test/run_65.bds", expectedValues);
    }

    @Test
    public void test66() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("sif", "String 'hi' is NOT empty");
        expectedValues.put("lif", "List '[hi, bye]' is NOT empty");
        expectedValues.put("mif", "Map '{}' IS empty");
        runAndCheck("test/run_66.bds", expectedValues);
    }

    @Test
    public void test67() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("s", "varS");
        expectedValues.put("s1", "Hi '$'");
        expectedValues.put("s2", "Hi $");
        expectedValues.put("s3", "Hi $ bye");
        runAndCheck("test/run_67.bds", expectedValues);
    }

    @Test
    public void test68() {
        runAndCheck("test/run_68.bds", "out", "hi bye end\n");
    }

    @Test
    public void test70() {
        runAndCheck("test/run_70.bds", "i", 10L);
    }

    @Test
    public void test71() {
        runAndCheck("test/run_71.bds", "i", 10L);
    }

    @Test
    public void test72() {
        runAndCheck("test/run_72.bds", "i", 10L);
    }

    @Test
    public void test73() {
        runAndCheck("test/run_73.bds", "i", 10L);
    }

    @Test
    public void test74() {
        runAndCheck("test/run_74.bds", "i", 10L);
    }

    @Test
    public void test75() {
        runAndCheck("test/run_75.bds", "ls", "EXEC\ntest/run_75.bds\nDONE\n");
    }

    @Test
    public void test76() {
        runAndCheck("test/run_76.bds", "list", "[0, 2, 4, 6, 8, 10]");
    }

    public void test77() {
        runAndCheck("test/run_77.bds", "list", "[10, 8, 6, 4, 2, 0]");
    }

    public void test78() {
        runAndCheck("test/run_78.bds", "list", "[1, 2, 4, 8, 16, 32, 64]");
    }

    public void test79() {
        runAndCheck("test/run_79.bds", "list", "[128, 64, 32, 16, 8, 4, 2, 1]");
    }

    public void test80() {
        runAndCheck("test/run_80.bds", "j", 2L);
    }

    public void test81() {
        runAndCheck("test/run_81.bds", "j", 19L);
    }

    public void test82() {
        runAndCheck("test/run_82.bds", "s", "Hi.Bye.");
    }

    @Test
    public void test83() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("i", 3L);
        expectedValues.put("f", 5.85);
        expectedValues.put("s", "hibye");
        expectedValues.put("l", "[hi, bye, world]");
        runAndCheck("test/run_83.bds", expectedValues);
    }

    public void test86() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("m", 60L);
        expectedValues.put("h", 3600L);
        expectedValues.put("d", 86400L);
        expectedValues.put("oneK", 1024L);
        expectedValues.put("oneM", 1048576L);
        expectedValues.put("oneG", 1073741824L);
        expectedValues.put("oneT", 1099511627776L);
        expectedValues.put("oneP", 1125899906842624L);
        runAndCheck("test/run_85.bds", expectedValues);
    }

    @Test
    public void test88() {
        runAndCheckStderr("test/run_88.bds", "Not enough resources to execute task:");
    }

    @Test
    public void test89() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("f", "file.txt");
        expectedValues.put("f2", "file.vcf");
        expectedValues.put("f3", "file.vcf");
        expectedValues.put("f4", "file.txt.vcf");
        runAndCheck("test/run_89.bds", expectedValues);
    }

    @Test
    public void test94() {
        runAndCheckExit("test/run_94.bds", 1);
    }

    @Test
    public void test95() {
        runAndCheck("test/run_95.bds", "ll", "[zero, one, two, three, four, 5]");
    }

    @Test
    public void test96() {
        runAndCheck("test/run_96.bds", "l", "[one, two, three, four]");
    }

    @Test
    public void test97() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("h1", "1");
        expectedValues.put("h2", "3");
        expectedValues.put("h3", "2");
        expectedValues.put("h4", "2");
        expectedValues.put("h5", "1");
        runAndCheck("test/run_97.bds", expectedValues);
    }

    @Test
    public void test98() {
        HashMap<String, Object> expectedValues = new HashMap<>();
        expectedValues.put("h1", "1");
        expectedValues.put("h2", "3");
        expectedValues.put("h3", "2");
        expectedValues.put("h4", "2");
        expectedValues.put("h5", "1");
        runAndCheck("test/run_98.bds", expectedValues);
    }

    @Test
    public void test99() {
        runAndCheck("test/run_99.bds", "finished", "true");
    }

}
