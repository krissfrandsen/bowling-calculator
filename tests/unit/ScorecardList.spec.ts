import { shallowMount } from "@vue/test-utils";
import ScorecardList from "@/components/ScorecardList.vue";
import { IFrame } from "@/types/frame";

const mockedFrames: IFrame[] = [
  {
    rolls: [1, 1],
    score: 2,
    index: 1,
  },
  {
    rolls: [4, 4],
    score: 10,
    index: 2,
  },
  {
    rolls: [1, 5],
    score: 15,
    index: 3,
  },
];

describe("ScorecardList.vue", () => {
  it("numberOfBaseFrames should return 8 when numberOfFrames is 9", () => {
    const wrapper = shallowMount(ScorecardList, {
      propsData: {
        frames: mockedFrames,
        numberOfFrames: 9,
      },
    });
    expect((wrapper.vm as any).numberOfBaseFrames).toBe(8);
  });

  it.each`
    numberOfFrames | result | frames
    ${9}           | ${8}   | ${null}
    ${8}           | ${7}   | ${null}
    ${null}        | ${1}   | ${null}
  `(
    "numberOfBaseFrames should return $result when numberOfFrames is $numberOfFrames",
    ({ numberOfFrames, result }) => {
      const wrapper = shallowMount(ScorecardList, {
        propsData: {
          frames: mockedFrames,
          numberOfFrames: numberOfFrames,
        },
      });
      expect((wrapper.vm as any).numberOfBaseFrames).toBe(result);
    }
  );

  // Ska hämta ut frame nummer 1 från frame och kolla
  // så att rolls stämmer överrens med de värdet som
  // finns i mockedFrames

  it("getRolesForFrame should return correct value for frame 1", () => {
    const wrapper = shallowMount(ScorecardList, {
      propsData: {
        frames: mockedFrames,
        numberOfFrames: 9,
      },
    });
    expect((wrapper.vm as any).getRolesForFrame(1)).toEqual([1, 1]);
  });

  // 1.
  // write a test that checks the value on the first and the last
  // frame in mockedFrames och hanterar null

  it.each`
    index | value
    ${1}  | ${[1, 1]}
    ${3}  | ${[1, 5]}
  `(
    "getRolesForFrame should return $value when index is $index",
    ({ numberOfFrames, index, value }) => {
      const wrapper = shallowMount(ScorecardList, {
        propsData: {
          frames: mockedFrames,
          numberOfFrames: numberOfFrames,
        },
      });
      expect((wrapper.vm as any).getRolesForFrame(index)).toEqual(value);
    }
  );

  // 2.
  // getResultForFrame samma två tester som för getRolesForFrame
  // ett test med it för att testa ett case
  // ett test med it.each för att testa flera cases
  it("getResultForFrame should return correct score for frame 1", () => {
    const wrapper = shallowMount(ScorecardList, {
      propsData: {
        frames: mockedFrames,
        numberOfFrames: 9,
      },
    });
    expect((wrapper.vm as any).getResultForFrame(1)).toBe("2");
  });

  it.each`
    index | score
    ${1}  | ${"2"}
    ${3}  | ${"15"}
  `(
    "getResultForFrame should return $score when index is $index",
    ({ numberOfFrames, index, score }) => {
      const wrapper = shallowMount(ScorecardList, {
        propsData: {
          frames: mockedFrames,
          numberOfFrames: numberOfFrames,
        },
      });
      expect((wrapper.vm as any).getResultForFrame(index)).toBe(score);
    }
  );
  // 3.
  //När ni är klara. Pinga @Andreas
});
