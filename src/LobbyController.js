export class LobbyController {
    constructor(bus) {
        this.bus = bus;
    }

    displayUnions(unions) {
        console.log("🔵 BLUE [SOCIAL_SHELL]: Rendering Active Unions...");
        unions.forEach(u => console.log(`🏛️  Union: ${u.name} | Clubs: ${u.clubCount}`));
    }

    joinRequest(playerId, clubId) {
        console.log(`🔵 BLUE [SOCIAL_SHELL]: Player ${playerId} requesting to join Club ${clubId}`);
        this.bus.publish('PLAYER_JOIN_REQUEST', { playerId, clubId }, 'SOCIAL_SHELL');
    }
}
