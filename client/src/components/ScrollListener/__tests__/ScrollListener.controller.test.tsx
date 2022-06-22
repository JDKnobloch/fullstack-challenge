import ScrollListenerController from '../ScrollListener.controller';
import {Substitute} from "@fluffy-spoon/substitute";
import React, { useRef } from 'react';
import { ImportMock } from "ts-mock-imports";

describe("ScrollListener Controller Test", () => {

  it("isBottom should return false if there is no current ref", () => {

      let mockDiv = ImportMock.mockFunction(React,'useRef',{current: null})
      let ref = useRef<HTMLDivElement>(null);

      let result = ScrollListenerController.isBottom(ref);

      expect(result).toEqual(false);

      mockDiv.restore();

  });

  it("isBottom should return true when ref is at bottom of bounds", () => {
    let mockDiv = ImportMock.mockFunction(React,'useRef',{current: {getBoundingClientRect: ()=>{return {bottom:0}}}})
    let ref = useRef<HTMLDivElement>(null);
    let mockWindow = ImportMock.mockFunction(window,'innerHeight',0)

    let result = ScrollListenerController.isBottom(ref)

    expect(result).toEqual(true);

    mockDiv.restore();
    mockWindow.restore();

});

});