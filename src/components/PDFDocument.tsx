import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';

// Register fonts (optional - using standard ones for initial setup)
// Font.register({ family: 'Helvetica', src: '...' });

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        borderBottom: '1px solid #EEEEEE',
        paddingBottom: 20,
    },
    headerText: {
        flexDirection: 'column',
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    title: {
        fontSize: 12,
        color: '#2abb9b',
        marginTop: 5,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    main: {
        flexDirection: 'row',
        gap: 40,
    },
    leftColumn: {
        flexDirection: 'column',
        width: '35%',
    },
    rightColumn: {
        flexDirection: 'column',
        width: '65%',
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1.5,
        marginBottom: 10,
        borderLeft: '3px solid #2abb9b',
        paddingLeft: 8,
    },
    content: {
        fontSize: 9,
        color: '#444444',
        lineHeight: 1.6,
    },
    contactItem: {
        flexDirection: 'row',
        marginBottom: 8,
        alignItems: 'center',
    },
    contactIcon: {
        fontSize: 10,
        marginRight: 8,
        color: '#2abb9b',
    },
    experienceItem: {
        marginBottom: 15,
    },
    expHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
    },
    expTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#222222',
    },
    expDate: {
        fontSize: 8,
        color: '#2abb9b',
        fontStyle: 'italic',
    },
    expCompany: {
        fontSize: 8,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#666666',
        marginBottom: 5,
    },
    bulletPoint: {
        flexDirection: 'row',
        marginBottom: 3,
    },
    bullet: {
        width: 10,
        fontSize: 9,
        color: '#2abb9b',
    },
    skillItem: {
        marginBottom: 8,
    },
    skillName: {
        fontSize: 9,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    skillBar: {
        height: 3,
        backgroundColor: '#EEEEEE',
        width: '100%',
    },
    skillFill: {
        height: '100%',
        backgroundColor: '#2abb9b',
    }
});

const PDFDocument = () => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.headerText}>
                    <Text style={styles.name}>Zadock Selasi</Text>
                    <Text style={styles.title}>Tech Student | Founder | CEO | CFO</Text>
                </View>
                {/* Image Placeholder or actual if available */}
                <View style={{ width: 80, height: 80, backgroundColor: '#f0f0f0', borderRadius: 40 }} />
            </View>

            <View style={styles.main}>
                {/* Left Column */}
                <View style={styles.leftColumn}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Contact</Text>
                        <Text style={styles.content}>📍 Kumasi, Ghana</Text>
                        <Text style={styles.content}>📧 zadockselasi7@gmail.com</Text>
                        <Text style={styles.content}>📞 0532 539 051</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Education</Text>
                        <View style={styles.experienceItem}>
                            <Text style={styles.expTitle}>Computer Technology</Text>
                            <Text style={styles.expCompany}>Kumasi Technical University</Text>
                            <Text style={styles.expDate}>2024 - 2027</Text>
                            <Text style={styles.content}>CGPA: 3.9 / 4.0</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Skills</Text>
                        <View style={styles.skillItem}>
                            <Text style={styles.skillName}>Frontend Development</Text>
                            <View style={styles.skillBar}><View style={[styles.skillFill, { width: '85%' }]} /></View>
                        </View>
                        <View style={styles.skillItem}>
                            <Text style={styles.skillName}>UI/UX Design</Text>
                            <View style={styles.skillBar}><View style={[styles.skillFill, { width: '75%' }]} /></View>
                        </View>
                        <View style={styles.skillItem}>
                            <Text style={styles.skillName}>Technical & Business Analysis</Text>
                            <View style={styles.skillBar}><View style={[styles.skillFill, { width: '90%' }]} /></View>
                        </View>
                    </View>
                </View>

                {/* Right Column */}
                <View style={styles.rightColumn}>
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Profile</Text>
                        <Text style={styles.content}>
                            Disciplined and highly motivated tech student with a passion for building impactful solutions
                            through technology, design, and business leadership. I combine technical knowledge,
                            design thinking, and business leadership to create value-driven projects.
                        </Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Experience</Text>

                        <View style={styles.experienceItem}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>Founder / CEO</Text>
                                <Text style={styles.expDate}>2024 - Present</Text>
                            </View>
                            <Text style={styles.expCompany}>EcclesiaBranx</Text>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.content}>Founded and lead the organization, defining vision and strategy.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.content}>Oversee operations, team collaboration, and business development.</Text>
                            </View>
                        </View>

                        <View style={styles.experienceItem}>
                            <View style={styles.expHeader}>
                                <Text style={styles.expTitle}>Chief Financial Officer (CFO)</Text>
                                <Text style={styles.expDate}>2024 - Present</Text>
                            </View>
                            <Text style={styles.expCompany}>Restart Digital Startup</Text>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.content}>Manage budgeting, financial planning, and tracking expenses.</Text>
                            </View>
                            <View style={styles.bulletPoint}>
                                <Text style={styles.bullet}>•</Text>
                                <Text style={styles.content}>Provide financial insights for decision-making and operational planning.</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Interests</Text>
                        <Text style={styles.content}>
                            Reading (Tech, Business, Personal Dev), Community Development, Innovation in Digital Ecosystems.
                        </Text>
                    </View>
                </View>
            </View>
        </Page>
    </Document>
);

export default PDFDocument;
