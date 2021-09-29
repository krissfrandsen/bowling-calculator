import { shallowMount } from "@vue/test-utils";
import ScorecardItem from "@/components/ScorecardItem.vue";
import { IFrame } from "@/types/frame";

const mockedFrames: IFrame[] = [
  {
    rolls: [1, 1],
    score: 2,
    index: 1,
  },
  {
    rolls: [],
    score: 0,
    index: 2,
  },
  {
    rolls: [1, 5],
    score: 15,
    index: 3,
  },
];

describe("ScorecardItem.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(ScorecardItem, {
      propsData: {
        rolls: [1, 0],
        result: 0,
      },
    });
  });

  it.each`
    rolls     | value
    ${[1, 0]} | ${1}
    ${[]}     | ${0}
  `(
    "rollOne should return $value when rolls[0] is $rolls",
    async ({ rolls, value }) => {
      await wrapper.setProps({
        rolls,
      });
      expect(wrapper.vm.rollOne).toBe(value);
    }
  );
  it.each`
    rolls      | value
    ${[10, 0]} | ${"X"}
    ${[1, 2]}  | ${"1"}
    ${[]}      | ${""}
  `(
    "firstRoll should return $value when rolls is $rolls",
    ({ rolls, value }) => {
      const wrapper = shallowMount(ScorecardItem, {
        propsData: {
          rolls: rolls,
          result: 0,
        },
      });
      expect((wrapper.vm as any).firstRoll).toBe(value);
    }
  );

  it.each`
    rolls      | value
    ${[10, 0]} | ${"-"}
    ${[5, 5]}  | ${"/"}
    ${[2, 3]}  | ${"3"}
    ${[]}      | ${""}
  `(
    "secondRoll should return $value when rolls is $rolls",
    ({ rolls, value }) => {
      const wrapper = shallowMount(ScorecardItem, {
        propsData: {
          rolls: rolls,
          result: 0,
        },
      });
      expect((wrapper.vm as any).secondRoll).toBe(value);
    }
  );

  it.each`
    result | value
    ${10}  | ${""}
    ${20}  | ${"20"}
  `(
    "resultScore should return $value when result is $result",
    ({ result, value }) => {
      const wrapper = shallowMount(ScorecardItem, {
        propsData: {
          rolls: mockedFrames,
          result: result,
        },
      });
      expect((wrapper.vm as any).resultScore).toBe(value);
    }
  );
  // it("rollOne should return 1 when we get mockedFrames[0].rolls[0]", () => {
  //   const wrapper = shallowMount(ScorecardItem, {
  //     propsData: {
  //       rolls: mockedFrames[0].rolls,
  //       result: 0,
  //     },
  //   });
  //   expect((wrapper.vm as any).rollOne).toBe(1);
  // });

  // it("rollOne should return 0 when we get mockedRollsUndefined[0]", () => {
  //   const wrapper = shallowMount(ScorecardItem, {
  //     propsData: {
  //       rolls: mockedFrames[1].rolls,
  //       result: 0,
  //     },
  //   });
  //   expect((wrapper.vm as any).rollOne).toBe(0);
  // });
});
// should resultScore funtion return (this.result.toString() || '') as the other methods?
// do we need to test for rollTwo as it is doing the exact same thing as rollOne?
