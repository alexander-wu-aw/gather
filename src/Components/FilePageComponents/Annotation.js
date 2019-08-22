import React from 'react';

// Open Layers Imports
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import { getCenter } from 'ol/extent.js';
import ImageLayer from 'ol/layer/Image.js';
import Projection from 'ol/proj/Projection.js';
import Static from 'ol/source/ImageStatic.js';

import 'ol/ol.css';

class Image extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var extent = [0, 0, 1024, 968];
        var projection = new Projection({
            code: 'xkcd-image',
            units: 'pixels',
            extent: extent
        });
        console.log("ASDF",this.props.fileURL)

        var map = new Map({
            layers: [
                new ImageLayer({
                    source: new Static({
                        attributions: '© <a href="http://xkcd.com/license.html">xkcd</a>',
                        url: this.props.fileURL,
                        projection: projection,
                        imageExtent: extent
                    })
                })
            ],
            target: 'map',
            view: new View({
                projection: projection,
                center: getCenter(extent),
                zoom: 2,
                maxZoom: 8
            })
        });
    }


    render() {
        return (
            <div>
                <div id="map" className="map" ></div>
            </div>
        )
    }
}

export default Image;