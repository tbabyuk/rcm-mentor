

const LEVELS = {
    prepA: ["C pentascale", "G pentascale", "D pentascale", "A min pentascale", "C major triad"],
    prepB: ["D pentascale", "A pentascale", "F pentascale", "E min pentascale", "D min pentascale", "A min (nat.) pentascale", "C maj contrary motion", "C maj triads", "G maj triads", "A min triads"],
    lvl1: ["C maj scale", "G maj scale", "F maj scale", "A min natural scale", "A min harmonic scale", "E min natural scale", "E min harmonic scale", "D min natural scale", "D min harmonic scale", "C maj contrary motion scale", "Chromatic scale starting on C", "C maj triads (broken)", "C maj triads (solid)", "G maj triads (broken)", "G maj triads (solid)", "F maj triads (broken)", "F maj triads (solid)", "A min triads (broken)", "A min triads (solid)", "E min triads (broken)", "E min triads (solid)", "D min triads (broken)", "D min triads (solid)"]
}


    // lvl6: {
    //     technical: "<b>SCALES:</b><br> major: G, E, B, D♭<br>minor: G, E, B, C♯ (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>E major,<br> E minor (har.)<br><br><b>CHROMATIC:</b><br>starting on E, D♭<br><br><b>TRIADS:</b><br>major: G, E, B, D♭<br>minor: G, E, B, C♯<br><br><b>DOMINANT 7th CHORDS:</b><br>major: G, E, B, D♭<br><br><b>LEADING-TONE DIMINISHED 7th CHORDS:</b><br>G, E, B, C♯ minor<br><br><b>ARPEGGIOS (tonic):</b><br>major: G, E, B, D♭<br>minor: G, E, B, C♯<br><br><b>ARPEGGIOS (dom 7th):</b><br>G, E, B, D♭<br><br><b>ARPEGGIOS (dim 7th):</b><br>G, E, B, C♯ minor",
    // },
    // lvl7: {
    //     technical: "<b>SCALES:</b><br> major: C, D, F, A♭, G♭<br>minor: C, D, F, G♯, F♯ (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>D major, E minor (har.)<br><br><b>CHROMATIC:</b><br>starting on D, G♭<br><br><b>FOUR-NOTE CHORDS:</b><br>major: C, D, F, A♭, G♭<br>minor: C, D, F, G♯, F♯<br><br><b>DOMINANT 7th CHORDS:</b><br>C, D, F, A♭, G♭<br><br><b>LEADING-TONE DIMINISHED 7th CHORDS:</b><br>C, D, F, G♯, F♯ minor<br><br><b>ARPEGGIOS (tonic):</b><br>major: C, D, F, A♭, G♭<br>minor: C, D, F, G♯, C♯<br><br><b>ARPEGGIOS (dom 7th):</b><br>C, D, F, A♭, G♭ major<br><br><b>ARPEGGIOS (dim 7th):</b><br>C, D, F, G♯, F♯ minor",
    // },
    // lvl8: {
    //     technical: "<b>SCALES:</b><br> major: C, D, E, B♭, E♭, G♭<br>minor: C, D, E, B♭, E♭, F♯ (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>E♭ major, E♭ minor (har.)<br><br><b>CHROMATIC:</b><br>starting on E♭, E<br><br><b>FOUR-NOTE CHORDS:</b><br>major: C, D, E, B♭, E♭, G♭<br>minor: C, D, E, B♭, E♭, F♯<br><br><b>DOMINANT 7th CHORDS:</b><br>C, D, E, B♭, E♭, G♭<br><br><b>LEADING-TONE DIMINISHED 7th CHORDS:</b><br>C, D, E, B♭, E♭, F♯ minor<br><br><b>ARPEGGIOS (tonic):</b><br>major: C, D, E, B♭, E♭, G♭<br>minor: C, D, E, B♭, E♭, F♯<br><br><b>ARPEGGIOS (dom 7th):</b><br>C, D, E, B♭, E♭, G♭ major<br><br><b>ARPEGGIOS (dim 7th):</b><br>C, D, E, B♭, E♭, F♯ minor",
    // },
    // lvl9: {
    //     technical: "<b>SCALES:</b><br> major: C, D♭, D, E♭, E, F<br>minor: C, C♯, D, E♭, E, F (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>F, D♭ major, F, C♯ minor (har.)<br><br><b>CHROMATIC:</b><br>starting on any note from C-F<br><br><b>OCTAVES:</b><br>F, D♭ major, F, C♯ minor<br><br><b>FOUR-NOTE CHORDS:</b><br>major: C, D♭, D, E♭, E, F<br>minor: C, C♯, D, E♭, E, F<br><br><b>DOMINANT 7th CHORDS:</b><br>C, D♭, D, E♭, E, F<br><br><b>LEADING-TONE DIMINISHED 7th CHORDS:</b><br>C, C♯, D, E♭, E, F minor<br><br><b>ARPEGGIOS (tonic):</b><br>major: C, D♭, D, E♭, E, F<br>minor: C, C♯, D, E♭, E, F<br><br><b>ARPEGGIOS (dom 7th):</b><br>C, D♭, D, E♭, E, F major<br><br><b>ARPEGGIOS (dim 7th):</b><br>C, C♯, D, E♭, E, F minor",
    // },
    // lvl10: {
    //     technical: "<b>SCALES:</b><br> major: G♭, G, A♭, A, B♭, B<br>minor: F♯, G, G♯, A, B♭, B (har. & mel.)<br><br><b>FORMULA PATTERN:</b><br>F, D♭ major, F, C♯ minor (har.)<br><br><b>SEPARATED BY A 3rd:</b><br>G♭, G, A♭<br><br><b>SEPARATED BY A 6th:</b><br>A, B♭, B<br><br><b>OCTAVES:</b><br>B♭, B major, B♭, B minor (har. & mel.)<br><br><b>CHROMATIC in OCTAVES:</b><br>starting on any note from F♯ to B<br><br><b>FOUR-NOTE CHORDS:</b><br>major: G♭, G, A♭, A, B♭, B<br>minor: F♯, G, A♭, A, B♭, B<br><br><b>DOMINANT 7th CHORDS:</b><br>G♭, G, A♭, A, B♭, B<br><br><b>LEADING-TONE DIMINISHED 7th CHORDS:</b><br>F♯, G, A♭, A, B♭, B minor<br><br><b>ARPEGGIOS (tonic):</b><br>major: G♭, G, A♭, A, B♭, B<br>minor: F♯, G, A♭, A, B♭, B<br><br><b>ARPEGGIOS (dom 7th):</b><br>G♭, G, A♭, A, B♭, B major<br><br><b>ARPEGGIOS (dim 7th):</b><br>F♯, G, A♭, A, B♭, B minor",
    // }
// }

export default LEVELS;
